FROM nginx
COPY favicon.ico /usr/share/nginx/html/favicon.ico
COPY index.html /usr/share/nginx/html/index.html
COPY script.js /usr/share/nginx/html/script.js
COPY style.css /usr/share/nginx/html/style.css
COPY taxCalculator.js /usr/share/nginx/html/taxCalculator.js
RUN chmod -R g+rwx /var/cache/nginx /etc/nginx /usr/share/nginx/html && \
    sed -i.bak 's/listen\s*80;/listen 8080;/' /etc/nginx/conf.d/default.conf && \
    sed -i 's,pid.*,pid /tmp/nginx.pid;,' /etc/nginx/nginx.conf
EXPOSE 8080
USER 1001
