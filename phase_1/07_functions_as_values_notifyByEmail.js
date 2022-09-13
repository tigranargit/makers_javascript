const notifyByEmail = (email) => {
      return 'Email sent to: ' + email;
}

const notifyByText = (phone) => {
      return 'Text sent to: ' + phone;
}

const notify = (who, notifyfunction) => {
      return notifyfunction(who);
}

console.log(notify('hello@makers.tech.test',notifyByEmail))
console.log(notify('+10000000000',notifyByText))