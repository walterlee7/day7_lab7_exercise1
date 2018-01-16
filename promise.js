// let math = slowMath.divide(6, 2);
// console.log(math);

slowMath.add(6, 2).then((add) => {console.log(add);
    slowMath.multiply(add, 2).then((mul) => {console.log(mul);
        slowMath.divide(mul, 4).then((div) => {console.log(div);
            slowMath.subtract(div, 3).then((sub) => {console.log(sub);
                slowMath.add(sub, 98).then((add) => {console.log(add);
                    slowMath.remainder(add, 2).then((rem) => {console.log(rem);
                        slowMath.multiply(rem, 50).then((mul) => {console.log(mul);
                            slowMath.remainder(mul, 40).then((rem) => {console.log(rem);
                                slowMath.add(rem, 32).then((add) => {console.log(`The final result is ${add}.`);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }).catch((err) => {console.log(err);}
);




