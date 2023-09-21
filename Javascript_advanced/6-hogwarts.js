class studentHogwarts {
  constructor() {
    this.privateScore = 0;
    this.name = null;
  }

  #changeScoreBy(points) {
    this.privateScore += points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    return (points)=> {
      if (!points) { points = 1; }
      for (let i = 0; i < points; i++) { 
        this.#changeScoreBy(1); 
      }
    }
  }

  penalizeStudent() {
    return (points)=> {
      if (!points) { points = 1; }
      for (let i = 0; i < points; i++) { 
        this.#changeScoreBy(-1);
      }
    }
  }

  getScore() {
    return `${this.name}: ${this.privateScore}`;
  }
}

const harry = new studentHogwarts();
harry.setName('Harry');
harry.rewardStudent = harry.rewardStudent();
harry.penalizeStudent = harry.penalizeStudent();
harry.rewardStudent(4);
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent = draco.rewardStudent(); 
draco.penalizeStudent = draco.penalizeStudent();
draco.rewardStudent(1);
draco.penalizeStudent(3);
console.log(draco.getScore());
