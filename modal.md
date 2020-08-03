## Modals
### Modal scrolling 

A modal box will not have scroll bars of its own as it will be 
part of a page. I had a modal box that needs to be scrolled to see 
the whole contents. Here is the fix :
``` .modal {
    max-height: calc(100vh - 15px);
    overflow-y: auto;
    }
```