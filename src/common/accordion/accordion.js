const sections = [
  {
    title: "Section 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
  },
  {
    title: "Section 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
  },

  {
    title: "Section 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
  },

  {
    title: "Section 4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
  },

  {
    title: "Section 5",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
  },

  {
    title: "Section 6",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
  },

  {
    title: "Section 7",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!"
  }
];

const renderElement = (i, item) => {
  const accordion__header = document.createElement("button");
  const accordion__container = document.createElement("div");
  const accordion__content = document.createElement("p");

  accordion__header.classList.add("accordion");
  accordion__container.classList.add("panel");

  document.body.append(accordion__header);
  document.body.appendChild(accordion__container);
  accordion__container.appendChild(accordion__content);

  const sectionString = "Section ";
  let sectionItem = i + 1;
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit perspiciatis officiis sint unde magnam hic provident rerum eius in, dicta molestias deserunt laborum incidunt ipsa atque! Maxime ut autem architecto!";

  accordion__header.innerHTML = sectionString + sectionItem;
  accordion__content.innerHTML = content + content + content;
};

const createElements = numberOfElements => {
  for (let i = 0; i < numberOfElements; i++) {
    renderElement(i);
  }
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};

export const accordion = mountPoint => {
  createElements(7);
};
