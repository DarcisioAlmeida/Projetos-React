import { Item } from '../types/Item';

/* função que pega mês atual */
  export const getCurrentMonth = () => {
      let now = new Date();
      return `${now.getFullYear()}-${now.getMonth()+1}`;
  }

/* função que filtra lista pelo mês e gera nova lista */  
  export const filterListByMonth = (list: Item[], date: string): Item[] => {
      let newList: Item[] = [];
      let [year, month] = date.split('-');

      for(let i in list) {
          if(
              list[i].date.getFullYear() === parseInt(year) &&
              (list[i].date.getMonth() + 1) === parseInt(month)
          ) {
              newList.push(list[i]);
          }
      }

      return newList;
  }
/* função que formata e exibe a data (mês/dia/ano) */  
    export const formatDate = (date: Date): string => {
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
    }
    const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

/* função que formata mês atual e transforma em string nome mês e ano */  
    export const formatCurrentMonth = (currentMonth: string): string => {
        let [year, month] = currentMonth.split('-');
        let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return `${months[parseInt(month) - 1]} de ${year}`;
    }