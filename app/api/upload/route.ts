import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    // Check content length first to handle large files before parsing
    const contentLength = request.headers.get('content-length');
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    if (contentLength && parseInt(contentLength) > maxSize) {
      return NextResponse.json(
        { 
          error: 'File size is too large. Please upload a file smaller than 10MB. You can compress the image or use a PDF instead.',
          code: 'FILE_TOO_LARGE'
        },
        { status: 413 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided. Please select a file to upload.' },
        { status: 400 }
      );
    }

    // Validate file type (only PDF, images)
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a PDF or image file (JPG, PNG, or WebP).' },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB) - double check after parsing
    if (file.size > maxSize) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      return NextResponse.json(
        { 
          error: `File size (${fileSizeMB}MB) exceeds the 10MB limit. Please compress the image or use a smaller file.`,
          code: 'FILE_TOO_LARGE'
        },
        { status: 413 }
      );
    }

    // Convert File to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert buffer to base64
    const base64 = buffer.toString('base64');
    const dataURI = `data:${file.type};base64,${base64}`;

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        dataURI,
        {
          folder: 'snps/admissions/tc',
          resource_type: 'auto',
          allowed_formats: ['pdf', 'jpg', 'jpeg', 'png', 'webp'],
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
    });

    return NextResponse.json({
      success: true,
      url: (uploadResult as any).secure_url,
      public_id: (uploadResult as any).public_id,
    });
  } catch (error: any) {
    console.error('Cloudinary upload error:', error);
    
    // Handle specific error types
    if (error.message && error.message.includes('File size')) {
      return NextResponse.json(
        { 
          error: 'File size is too large. Please upload a file smaller than 10MB.',
          code: 'FILE_TOO_LARGE'
        },
        { status: 413 }
      );
    }
    
    if (error.http_code === 400 || error.message?.includes('Invalid')) {
      return NextResponse.json(
        { error: 'Invalid file format. Please upload a PDF or image file.' },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to upload file. Please check your internet connection and try again, or submit the form without the file.',
        code: 'UPLOAD_FAILED'
      },
      { status: 500 }
    );
  }
}

