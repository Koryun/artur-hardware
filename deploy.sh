rm -rf .next
rm -rf out
yarn build
yarn next export
rm -rf /var/www/html/hardwarehouses/*
cp -r /home/tyom/projects/Hardware-design-house/out/* /var/www/html/hardwarehouses 
