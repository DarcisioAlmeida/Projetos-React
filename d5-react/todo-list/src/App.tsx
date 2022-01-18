import { useState } from 'react';
import * as C from './App.styles'; // C = Container
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Estudar Inglês das 6 até as 7hs', done: false },
    { id: 2, name: 'Fazer meditação de 30min pela manhã e a tarde', done: true },
  ]);

  /* Clone da lista e gera nova*/
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  // Função para mudar o item da lista [list] fora do state pelo id.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas | todo-list</C.Header>
        
        <AddArea onEnter={handleAddTask} />

        {/* lista de tarefas*/}
        {list.map((item, index)=>(
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;