
# tiny-pkgs 
a collection of packeges that i use iin mos of my react projects
[template used](https://github.com/tigawanna/react-component-library-builder)


import
```ts
import { TheIcon,LoadingElipse,QueryStateWrapper, } from '@denniskinutia/tiny-pkgs';
```
- ## LoadingElipse :
simple loading animation

- ## TheIcon :
a wraps react icons with the `Icon.ContextProvider` and custom size,color , styles and click action props

```ts
export interface TheIconProps {
  Icon: IconType;
  size?: string;
  color?: string;
  iconstyle?: string;
  iconAction?: () => any;
}
```
example usage:
```ts
<TheIcon Icon={FaBars} size='100'color='red' iconstyle='w-full' iconAction={()=>console.log("clicked")}/>
    
```

- ## QueryStateWrapper
`react-query` wrapper that takes in the response query and displays `loading/error` state  or `data` if query was successfull

#### props:
```ts
export interface QueryStateWrapperProps {
  children: React.ReactNode;
  loader?: React.ReactNode;
  length?:number;
  query?:
    | UseQueryResult<void, unknown>
    | UseInfiniteQueryResult<void, unknown>;
}

```
- childern: wrap it around the data/list you want to render if the `query.data` is not null

- loader: optionalcustom loading component
- query `const query=useQuery`/`const query = useInfinitequery`
- length: `query.data.length` used to determine for when query was successfull but no data is avaliable at that endpoint

example usage:

```ts
      <QueryStateWrapper
        query={query}
        length={query.data?.items.length}
        // loader={<LoadElipse />}
      >
        <div className=" bg-yellow-900 w-[200px] rounded-full
       dark:text-white dark:shadow-white">
          hello
        </div>

      </QueryStateWrapper>

```
- ## ErrorBoundary:
for wrapping the root component to show a custom page and messagge when the app crashes


example usage:
```ts
import { ErrorBoundary } from '@denniskinutia/tiny-pkgs';

  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </ErrorBoundary>

```

## ReactModalWrapper

```ts
export interface ReactModalWrapperProps {
  isOpen: boolean;
  closeModal: () => void;
  styles?: {
    overlay_bg_color?: string;
    content_top?: string;
    content_left?: string;
    content_right?: string;
    content_bottom?: string;
    content_border?: string;
    content_border_radius?: string;
    content_bg_color?: string;
    content_box_shadow?: string;
  };
  child: ReactNode;
  deps?: any;
}
```
