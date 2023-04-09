# using-next-and-typescript

the aplication is working, but
there is an typescript error in ./src/pages/index.tsx yet: 

Type '(e: {    target: {        parentElement: {            innerText: string | undefined;        };    };}) => void' is not assignable to type 'MouseEventHandler<HTMLElement>'.
  Types of parameters 'e' and 'event' are incompatible.
    Type 'MouseEvent<HTMLElement, MouseEvent>' is not assignable to type '{ target: { parentElement: { innerText: string | undefined; }; }; }'.
      Types of property 'target' are incompatible.
        Property 'parentElement' is missing in type 'EventTarget' but required in type '{ parentElement: { innerText: string | undefined; }; }'.ts(2322)
index.tsx(21, 44): 'parentElement' is declared here.
index.d.ts(1494, 9): The expected type comes from property 'onClick' which is declared here on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'
