const arr = ['Bhaskar', 'Sarma'] as const;

type CustomType1 = typeof arr[number];
