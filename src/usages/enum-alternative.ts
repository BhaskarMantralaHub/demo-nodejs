const arr = ['Bhaskar', 'Sarma'] as const;

type CustomType = typeof arr[number];

const nameObj: {[k in CustomType]: string} = {
    Bhaskar: "",
    Sarma: ""
}

console.log(typeof nameObj)
