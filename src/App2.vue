<template>
  <div>
    <div class="main">
      <div class="menuBar__button">
        <button class="menuBar__button-submit"><a>Nộp bài</a></button>
      </div>

      <div class="menubar-container">
        <div>
          <span class="menuBar__title">Bài test: junior BA</span>
        </div>
        <div>
          <span class="menuBar__title">Thời Gian còn Lại:</span>
          <span class="menuBar__time"> 00:15:00</span>
        </div>
      </div>

      <div class="question">
        <div class="question__container">
          <ul>
            <li
              v-for="(question, index) in questions"
              :key="index"

              :class="{answered: myAnswers.find((value) => value.question === index)}"
              @click="changeIndex(index)"
            >
              Câu {{ index + 1 }}
            </li>
            <!-- <li
              v-for="(question, index) in questions"
              :key="index"
              
              :class="{ answered: indexAnswered.find(x => x === index) }"
              @click="changeIndex(index)"
            >
              Câu {{ index + 1 }}
            </li> -->
          </ul>
        </div>
      </div>

      <div class="body">
        <div class="body-container">
          <div class="body__question">
            <h5 class="question__title">
              {{ questions[currentQuestion].QuestionTitle }}
            </h5>
          </div>
          <div class="body__answers">
            <form class="form" action="./b.html" method="get">
              <section
                v-for="(answer, index) in questions[currentQuestion].Answer"
                :key="index"
              >
                <input
                  type="radio"
                  name="answer"
                  :id="index"
                  :value="index"
                  @click="addAnswered($event)"
                />
                <label
                  class="answer-item"
                  :class="{ answered: styleAnswered(index) }"
                  :for="index"
                  :name="index"
                  >{{ answer }}</label
                >
              </section>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          QuestionTitle: "s",
          Type: 1,
          Answer: {
            A: "1",
            B: "2",
            C: "3",
            D: "4"
          },
          Correct: ""
        },
        {
          QuestionTitle: "s",
          Type: 2,
          Answer: {
            A: "3",
            B: "24",
            C: "35",
            D: "46"
          },
          Correct: ""
        }
      ],
      myAnswers: [],
      indexAnswered: [],
      currentQuestion: 0
    };
  },
  beforeCreate() {
    // this.axios
    //   .get("https://dunggramer.github.io/testJSON/Question.json")
    //   .then(res => {
    //     this.questions = res.data.data;
    //   })
    //   .catch(e => console.log(e));
  },
  methods: {
    changeIndex(index) {
      this.currentQuestion = index;
    },
    addIndexAnswered(e) {
      try {
        let haved = this.indexAnswered.find(x => x === e);
        if (haved === undefined) this.indexAnswered.push(e);
        console.log(this.indexAnswered);
      } catch (e) {
        console.error(e);
      }
    },
    styleAnswered(e) {
      let index = this.findAnswered();
      if (index === -1) return false;
      else if (this.myAnswers[index].answer === e) return true;
      return false;
    },
    findAnswered() {
      return this.myAnswers.findIndex(
        value => this.currentQuestion === value.question
      );
    },
    addAnswered(e) {
      //find index of this answered in myAnswers array
      let indexAnswered = this.findAnswered();
      if (indexAnswered === -1)
        this.myAnswers.push({
          question: this.currentQuestion,
          answer: e.target.value
        });
      else this.myAnswers[indexAnswered].answer = e.target.value;
      console.log("currentQuestion: ", this.currentQuestion);
      this.addIndexAnswered(this.currentQuestion);
    }
  }
};
</script>

<style scoped>
.menubar-container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  font-size: 24px;
  align-items: center;
  color: #6e79af;
}
.main {
  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-columns: 15% 85%;
  place-items: center;
  height: calc(100vh - 65px - 16px);
  margin-top: 16px;
}
.menuBar__button {
  width: 80%;
  height: 70%;
  margin-left: 25px;
  margin-bottom: 5px;
}
.menuBar__button-submit {
  background-color: #f5802a;
  border-radius: 4px;
  border: none;
  width: 100%;
  height: 100%;
  padding: 5px 15px;
  color: white;
  &:focus {
    outline: none;
  }
}
.menubar-container a {
  cursor: pointer;
}
.menuBar__time {
  color: var(--red);
}
.question {
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.28));
  background: white;
  border-radius: 10px;
  cursor: pointer;
  width: 80%;
  height: 93%;
  overflow-x: auto;
  margin-left: 25px;
}
.question__container {
  font-size: 20px;
  line-height: 25px;
  align-items: center;
  text-align: center;
  color: #4d4f5c;
}
.question__container ul {
  list-style-type: none;
  text-align: center;
  align-items: center;
}
.question__container li {
  color: #4d4f5c;
  text-decoration: none;
  padding-top: 8%;
  padding-bottom: 8%;
}
.question__container li:hover {
  background-color: #f6f6f6;
  color: #6e79af;
  border-radius: 10px;
  border-radius: 0;
  overflow: hidden;
}
.body {
  width: 90%;
  height: 93%;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  padding: 30px 35px;
  overflow-x: auto;
}
.question__title {
  margin-bottom: 40px;
  line-height: 1.618;
  text-align: justify;
  text-justify: inter-word;
  font-weight: 600;
  font-size: 22px;
}
.body__answers {
  font-size: 18px;
}
input[type="radio"] {
  display: none;
}
.answer-item {
  display: block;
  cursor: pointer;
  border-radius: 10px;
  margin: 15px 0;
  padding: 12px 18px;
  align-items: center;
  display: flex;
  
}

/* &:hover {
    background: #f0f0f0;
  } */
.answered,
.answered:hover,
.question__container li.answered,
.question__container li.answered:hover {
  background: var(--blue);
  color: white;
}
</style>