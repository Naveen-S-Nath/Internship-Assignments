console.log("=== Student Manager System ===");

// Array storing student objects
const students = [
  {
    name: "Rahul",
    marks: {
      math: 85,
      science: 78,
      english: 90
    }
  },
  {
    name: "Priya",
    marks: {
      math: 92,
      science: 88,
      english: 95
    }
  },
  {
    name: "Arjun",
    marks: {
      math: 70,
      science: 65,
      english: 72
    }
  }
];

// Function to calculate average marks
function calculateAverage(marks) {
  const values = Object.values(marks);
  const total = values.reduce((sum, mark) => sum + mark, 0);
  return (total / values.length).toFixed(2);
}

// Function to display student performance
function displayStudents(studentList) {
  studentList.forEach((student, index) => {

    const avg = calculateAverage(student.marks);

    console.log(`\nStudent ${index + 1}: ${student.name}`);
    console.log("Marks:", student.marks);
    console.log("Average:", avg);

    if (avg >= 90) console.log("Grade: A");
    else if (avg >= 75) console.log("Grade: B");
    else if (avg >= 60) console.log("Grade: C");
    else console.log("Grade: D");

  });
}

// Run the system
displayStudents(students);