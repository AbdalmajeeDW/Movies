<template>
  <div class="container">
    <div class="add">
      <input type="text" @keyup.enter="handelClick" v-model="tasks" />
      <button @click="() => handelClick()">Add Task</button>
    </div>
    <ul class="dataa" v-for="taska in allTasks" :key="taska.id">
      <button @click="() => handelDelete(taska.id)">
        {{ taska.id === 0 ? "Love You" : "Delete" }}
      </button>
      <li>{{ taska.name }}</li>
      <button @click="() => update({ name: taska.name, id: taska.id })">
        update
      </button>
    </ul>
  </div>
</template>

<script>
import middle from "../middleware/name";
export default {
  middleware: middle,

  data() {
    return {
      tasks: "",
      allTasks: [],
      id: 0,
    };
  },
  methods: {
    handelClick() {
      if (this.tasks === "" || this.tasks === null) {
        alert("no task");
      } else {
        this.allTasks.push({ name: this.tasks, id: this.id++ });
        this.tasks = "";
      }
    },
    handelDelete(id) {
      this.allTasks = this.allTasks.filter((e) => e.id !== id);
    },
    update(name, id) {
      this.tasks = name.name;
      this.allTasks.push({ name: "fasdfdsfjjasdhfkjsadhfajskd", id: id });
    },
  },
};
</script>
<style lang="scss">
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .add {
    display: flex;
    gap: 10px;

    input {
      border: 2px solid blueviolet;
      border-radius: 20px;
      color: white;
      padding: 5px;
    }
  }

  .dataa {
    display: flex;
    margin-top: 10px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 70px;
    padding: 10px;
  }

  ul {
    list-style: none;
  }

  button {
    border: 1px solid blueviolet;
    padding: 10px;
    border-radius: 20px;
  }
}
</style>