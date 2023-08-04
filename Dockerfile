FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/2005-SACHITH-MAX/CYBER-PANDA-MD-V1 /root/2005-SACHITH-MAX
WORKDIR /root/2005-SACHITH-MAX/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
