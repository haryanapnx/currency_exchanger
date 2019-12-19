FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM mhart/alpine-node
RUN npm install -global serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3000", "-s", "."]