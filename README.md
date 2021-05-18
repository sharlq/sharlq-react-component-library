# Greating my own component library
  
  for learning purposes and maybe to develope it and use it in the futuer i have published my own library  
  
  you can visit the package here to check it or use it  
  https://www.npmjs.com/package/sharlq-comp-lib  

# components
## Select
its a customized  select that take two props  
1. items : an array that has the items of the list
1. onItem : a function that git triggered when you press the item this function have its list item as an argument

### usage
```ruby
import {Select} from 'sharlq-comp-lib'
 <Select
  title={"Select From"},
    items={["firstItem","secondItem","thirdItem"]},
    onItem = {handleItemFunction},
    width = {"175px"}}/>

```
## Button
a simple customizable button
  
  ### usage
```ruby
import {Button} from 'sharlq-comp-lib'
 <Button
  label={"press here"},
   {...props}/>

```
## Card
i have added a simple card with elemnt for images

  ### usage
```ruby
import {Card} from 'sharlq-comp-lib'
 <Card>
 {children}
 </Card>

```