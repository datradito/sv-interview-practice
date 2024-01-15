export default function Questionnaire() {
  return (
    <>
      <h1>Questionnaire</h1>
      <p>
        We want to build a Multiple choice Questionnaire. After submission, we
        calculate a score based on the answers.
      </p>
      <p>Create a questionnaire that takes two types of questions</p>
      <ol>
        <li>Questions with a single answer (radio)</li>
        <li>Questions with multiple answers (checkboxes)</li>
      </ol>
      <p>
        After submitting the questionnaire, each of the users answers must be
        compared with the actual answer for grading.
        <br />A multiple answer question is correct if{" "}
        <strong>all of the selected answers</strong> are correct
      </p>
    </>
  );
}
