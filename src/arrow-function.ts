const fn2 = (fn: (item: number) => boolean) => {
    return fn(1);
};

const fn3 = (item: number) => {
    return item % 2 === 0;
};

fn2(fn3);

function main(obj: {fn4: (item: number) => boolean}) {
    console.log(obj.fn4(1));
}

const obj = {
    a: 1,

    fn4: (item: number) => {
        return item % 2 === 0;
    }
};

main(obj);

// for (const item of listasDeNumeros) {
//     console.log(item);
// }
