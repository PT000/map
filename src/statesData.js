const states = [
    {
      name: "New South Wales",
      number: 1,
      amount: "$10,800",
      due: "12/05/1995"
    },
    {
      name: "Queensland",
      number: 2,
      amount: "$8,000",
      due: "10/31/2000"
    },
    {
      name: "South Australia",
      number: 3,
      amount: "$9,500",
      due: "07/22/2003"
    },
    {
      name: "Tasmania",
      number: 4,
      amount: "$14,000",
      due: "09/01/1997"
    },
    {
      name: "Victoria",
      number: 5,
      amount: "$4,600",
      due: "01/27/1998"
    },
    {
      name: "Western Australia",
      number: 6,
      amount: "$4,600",
      due: "01/27/1998"
    }
  ];
  
  export function getStates() {
    return states;
  }
  export function getState(number) {
    return states.find(state => state.number === number);
  }