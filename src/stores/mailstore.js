import { defineStore } from "pinia";

export const useMailStore = defineStore("mail", {
  state: () => ({
    mails: [],
    mailId: "akil@tgvis.com",
  }),
  actions: {
    async refreshMails(mail) {
      const res = await fetch("http://localhost:9999/getmail?mail=" + mail);
      const mails = await res.json();
	  console.log(mails);
      this.mails = mails;
    },
  },
});

