echo "## Removing files from ../bolhasocial.github.io/*"
rm -rf ../bolhasocial.github.io/*

echo "## Copying files to ../bolhasocial.github.io/"
cp -a public/. ../bolhasocial.github.io/

echo "## Removing public folder"
rm -rf ./public/

echo "## Reseting public folder"
git checkout public/


echo "## Adding files to staging @ ../bolhasocial.github.io/"
cd ../bolhasocial.github.io/

git add .

cd ../bolha-social-website/
