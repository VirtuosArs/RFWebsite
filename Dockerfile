

### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
# COPY nginx/default.conf /etc/nginx/conf.d/
RUN   echo "gzip on;" >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_disable "msie6";' >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_vary on;' >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_proxied any;' >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_comp_level 6;' >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_buffers 16 8k;' >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_http_version 1.1;' >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_min_length 256;' >> /etc/nginx/conf.d/default.conf
RUN   echo 'gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/vnd.ms-fontobject application/x-font-ttf font/opentype image/svg+xml image/x-icon;' >> /etc/nginx/conf.d/default.conf


## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY . /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
