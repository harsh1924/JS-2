function generateOTP() {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP = OTP + digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
console.log(`Here is your OTP: ${generateOTP()}`);