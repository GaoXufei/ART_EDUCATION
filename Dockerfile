FROM node:8.12.0
MAINTAINER gaoxufei
RUN mkdir -p /app
ADD . /app
WORKDIR /app

ENV HOST 0.0.0.0
ENV PORT 5000

EXPOSE 5000

RUN yarn

CMD ["yarn", "start"]