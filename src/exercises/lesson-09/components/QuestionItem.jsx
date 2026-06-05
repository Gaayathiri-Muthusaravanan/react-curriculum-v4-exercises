import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';
import { type } from '@testing-library/user-event/dist/cjs/utility/type.js';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);
  const [editingOptionIndex, setEditingOptionIndex] = useState(null);
  const [workingOptionText, setWorkingOptionText] = useState('');
  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const isEditing = state.ui.editingQuestionId === question.id;
  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    console.log('TODO: Implement edit functionality');

    // Hint: Use SET_EDITING_QUESTION action
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: question.id,
      },
    });
  };
  const handleCancel = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: null,
      },
    });
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    console.log('TODO: Implement save functionality');
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        questionId: question.id,
        newText: workingText,
      },
    });
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    console.log('TODO: Implement delete functionality');
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
    /*const confirmed = window.confirm('Are you sure you want to delete this question?');
      if (!confirmed) return;*/
    dispatch({
      type: 'DELETE_QUESTION',
      payload: {
        questionId: question.id,
      },
    });
  };

  const handleSaveOption = (index) => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText: workingOptionText,
      },
    });

    setEditingOptionIndex(null);
    setWorkingOptionText('');
  };
  const handleDeleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex: index,
      },
    });
  };
  const handleEditOption = (index, option) => {
    setEditingOptionIndex(index);
    setWorkingOptionText(option);
  };
  const handleAddOption = () => {
    const newOption = prompt('Enter new option');

    if (!newOption || !newOption.trim()) return;

    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: {
        questionId: question.id,
        option: newOption.trim(),
      },
    });
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          {!isEditing ? (
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit
            </button>
          ) : (
            <button onClick={handleCancel}>Cancel</button>
          )}
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete (TODO)
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      {!isEditing ? (
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
        >
          <input
            type="text"
            value={workingText}
            onChange={(e) => setWorkingText(e.target.value)}
          ></input>
          <button>Save</button>
        </form>
      )}

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {editingOptionIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={workingOptionText}
                      onChange={(e) => setWorkingOptionText(e.target.value)}
                    />

                    <button
                      type="button"
                      className={styles['edit-btn']}
                      onClick={() => handleSaveOption(index)}
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      className={styles['delete-btn']}
                      onClick={() => {
                        handleDeleteOption(index);
                      }}
                      disabled={question.options.length <= 2}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    <span className={styles['option-text']}>{option}</span>
                    <button
                      type="button"
                      onClick={() => {
                        handleEditOption(index, option);
                      }}
                    >
                      edit
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
          <button type="button" onClick={handleAddOption}>
            + Add Option
          </button>
        </div>
      )}
    </div>
  );
}
