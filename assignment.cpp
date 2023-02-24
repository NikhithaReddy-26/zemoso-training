#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Course {
public:
    int id;
    int num_prereqs;
    vector<Course*> prereqs;
    Course(int id) {
        this->id = id;
        num_prereqs = 0;
    }
};

class TrainingPlan {
public:
    vector<Course*> courses;

    void addCourse(int id) {
        courses.push_back(new Course(id));
    }

    void addPrereq(int id, int prereq_id) {
        Course* course = getCourse(id);
        Course* prereq = getCourse(prereq_id);
        course->prereqs.push_back(prereq);
        prereq->num_prereqs++;
    }

    Course* getCourse(int id) {
        for (int i = 0; i < courses.size(); i++) {
            if (courses[i]->id == id) {
                return courses[i];
            }
        }
        return NULL;
    }

    vector<int> getTrainingPlan() {
        vector<int> plan;
        queue<Course*> q;

        
        for (int i = 0; i < courses.size(); i++) {
            if (courses[i]->num_prereqs == 0) {
                q.push(courses[i]);
            }
        }

        
        while (!q.empty()) {
            Course* course = q.front();
            q.pop();
            plan.push_back(course->id);

            for (int i = 0; i < course->prereqs.size(); i++) {
                course->prereqs[i]->num_prereqs--;
                if (course->prereqs[i]->num_prereqs == 0) {
                    q.push(course->prereqs[i]);
                }
            }
        }

        return plan;
    }
};

int main() {
    TrainingPlan plan;

    int num_courses;
    cout << "Enter the number of courses: ";
    cin >> num_courses;

    for (int i = 1; i <= num_courses; i++) {
        plan.addCourse(i);
    }

    int num_prereqs;
    cout << "Enter the number of prerequisite relationships: ";
    cin >> num_prereqs;
    for (int i = 0; i < num_prereqs; i++) {
        int course_id, prereq_id;
        cout << "Enter the course ID and its prerequisite ID separated by a space: ";
        cin >> course_id >> prereq_id;
        plan.addPrereq(course_id, prereq_id);
    }
    vector<int> training_plan = plan.getTrainingPlan();
    cout << "Training Plan: ";
    for (int i = 0; i < training_plan.size(); i++) {
        cout << training_plan[i] << " ";
    }
    cout << endl;

    return 0;
}
