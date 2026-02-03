import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/tasks', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { completed: !completed },
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );
      setTasks(tasks.map(task => 
        task._id === id ? { ...task, completed: !completed } : task
      ));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Your Tasks ({tasks.length})</h3>
      {tasks.length === 0 ? (
        <p style={styles.noTasks}>No tasks yet. Add your first task above!</p>
      ) : (
        <div>
          {tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  heading: {
    marginTop: 0,
    marginBottom: '20px',
    color: '#333'
  },
  noTasks: {
    textAlign: 'center',
    color: '#999',
    padding: '20px'
  }
};

export default TaskList;