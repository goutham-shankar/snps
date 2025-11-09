# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Web3Forms Access Keys
NEXT_PUBLIC_WEB3FORMS_ADMISSION_KEY=869c90ba-d102-4a67-96d4-c7ca37ceeb90
NEXT_PUBLIC_WEB3FORMS_GRIEVANCE_KEY=0fb3d977-2f38-40dc-93e2-68d6e162ba8b

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Notes:
- `.env.local` is already in `.gitignore` and won't be committed
- `NEXT_PUBLIC_` prefix makes variables available in client components
- Server-side variables (without `NEXT_PUBLIC_`) are only available in API routes and server components
- Restart the dev server after adding/changing environment variables

