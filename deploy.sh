#!/bin/zsh

echo "========================================"
echo "1. Adding changes to Git..."
echo "========================================"

git add -A

if [ $? -ne 0 ]; then
    echo "Git add failed. Deployment stopped."
    exit 1
fi

echo ""
echo "========================================"
echo "2. Committing changes..."
echo "========================================"

git commit -m "Deploy latest changes"

if [ $? -ne 0 ]; then
    echo "Git commit failed or there are no changes to commit."
    exit 1
fi

echo ""
echo "========================================"
echo "3. Pushing to main branch..."
echo "========================================"

git push origin main

if [ $? -ne 0 ]; then
    echo "Git push failed. Deployment stopped."
    exit 1
fi

echo ""
echo "========================================"
echo "4. Building application..."
echo "========================================"

npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Deployment stopped."
    exit 1
fi

echo ""
echo "========================================"
echo "5. Uploading files to S3..."
echo "========================================"

aws s3 sync dist/ s3://edge-on-life --delete

if [ $? -ne 0 ]; then
    echo "S3 deployment failed."
    exit 1
fi

echo ""
echo "========================================"
echo "6. Creating CloudFront invalidation..."
echo "========================================"

aws cloudfront create-invalidation \
    --distribution-id E1IA2YJ3L604UR \
    --paths "/*"

if [ $? -ne 0 ]; then
    echo "CloudFront invalidation failed."
    exit 1
fi

echo ""
echo "========================================"
echo "Deployment completed successfully!"
echo "========================================"