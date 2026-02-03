import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div style={{
      ...styles.container,
      backgroundColor: task.completed ? '#f0f8f0' : 'white'
    }}>
      <div style={styles.content}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id, task.completed)}
          style={styles.checkbox}
        />
        <div style={styles.text}>
          <h4 style={{
            ...styles.title,
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#999' : '#333'
          }}>
            {task.title}
          </h4>
          {task.description && (
            <p style={styles.description}>{task.description}</p>
          )}
        </div>
      </div>
      <button
        onClick={() => onDelete(task._id)}
        style={styles.deleteBtn}
      >
        Delete
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '10px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px'
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    flex: 1
  },
  checkbox: {
    marginTop: '5px',
    cursor: 'pointer',
    width: '18px',
    height: '18px'
  },
  text: {
    flex: 1
  },
  title: {
    margin: '0 0 5px 0',
    fontSize: '16px'
  },
  description: {
    margin: 0,
    color: '#666',
    fontSize: '14px'
  },
  deleteBtn: {
    padding: '8px 15px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  }
};

export default TaskItem;