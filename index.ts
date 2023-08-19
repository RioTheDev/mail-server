import { SMTPServer } from "smtp-server";
import { simpleParser } from "mailparser";
import nodemailer from "nodemailer";
const server = new SMTPServer({
  onData: (stream, session, callback) => {
    simpleParser(stream, {}, (err, parsed) => {
      if (err) console.log("Error:", err);

      console.log(parsed);
      stream.on("end", callback);
    });
  },
  onAuth: (auth, session, callback) => {
    callback(null);
  },

  disabledCommands: ["AUTH"],
});

server.listen(25);
const transport = nodemailer.createTransport({
  host: "127.0.0.1",
  port: 25,
  tls: {
    rejectUnauthorized: false,
  },
});
const message = {
  from: "info@geocraft.online",
  to: "gaming.bait1223@gmail.com",
  subject: "Subject",
  text: "Hello SMTP Email",
};
transport.sendMail(message, (err, info) => {
  console.log(err);
});
