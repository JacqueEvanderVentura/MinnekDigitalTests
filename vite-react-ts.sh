cd public 
rm vite.svg

cd ../src


rm -r assets
rm App.css index.css
touch App.scss 

mkdir Components Views Logic Assets Assets/img Assets/bg Assets/font


sed -i -e '1,3d;6d;10,29d' App.tsx
sed -i -e '4d' main.tsx

sed -i "1s/^/import React from 'react'; /" App.tsx


