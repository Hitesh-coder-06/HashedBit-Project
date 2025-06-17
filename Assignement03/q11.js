/*
Input

[
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
]
    
Output: -
[
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
]
Write code to find average as mentioned above. Use array and object methods.
*/

const students = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37
  },
  student2: {
    subject1: 47,
    subject2: 52,
    subject3: 89,
    subject4: 90,
    subject5: 56
  },
  student3: {
    subject1: 56,
    subject2: 76,
    subject3: 45,
    subject4: 34,
    subject5: 97
  }
};

// Function to calculate average scores
function calculateAverages(data) {
  const result = {};

  // Loop over each student (key-value)
  for (const [student, scores] of Object.entries(data)) {
    // Extract all scores (values)
    const values = Object.values(scores);

    // Calculate sum using reduce
    const sum = values.reduce((acc, val) => acc + val, 0);

    // Calculate average
    const average = sum / values.length;

    // Assign average to result object
    result[student] = { average };
  }

  return result;
}

const averages = calculateAverages(students);
console.log(averages);