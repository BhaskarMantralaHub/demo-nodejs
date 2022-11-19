const arr = ['Bhaskar', 'Sarma'] as const;

type CustomType = typeof arr[number];
