import React,{useState} from "react";
import "./style.css";
var emojis = {
    "😀" : "Grinning face",
    "😁" : "Beaming face with smiling eyes",
    "😂" : "Face with tears of joy",
    "🤣" : "Rolling on floor laughing",
    "😃" : "Grinning face with big eyes",
    "😄" : "Grinning face with smiling eyes",
    "😅" : "Grinning face with sweat",
    "😆" : "Grinning squinting face",
    "😉" : "Winking face",
    "😊" : "Smiling face with smiling eyes",
    "😋" : "Face savouring food",
    "😎" : "Smiling face with sunglasses",
    "😍" : "Smiling face with heart eyes",
    "😘" : "Face blowing a kiss",
    "🥰" : "Smiling face with hearts",
    "😗" : "Kissing face",
    "😙" : "Kissing face with smiling eyes",
    "🥲" : "Smiling face with tear",
    "😚" : "Kissing face with closed eyes",
    "🙂" : "Slightly smiling face",
    "🤗" : "Hugging face",
    "🤩" : "Star-struck",
    "🤔" : "Thinking face",
    "🤨" : "Face with raised eyebrows",
    "😐" : "Neutral face",
    "😑" : "Expressionless face",
    "😶" : "Face without mouth",
    "😶‍🌫️" : "Face in clouds",
    "🙄" : "Face with rolling eyes",
    "😏" : "Smirking face",
    "😣" : "Preserving face",
    "😥" : "Sad but relieved face",
    "😮" : "Face with open mouth",
    "🤐" : "Zipper mouth face",
    "😯" : "Hushed face",
    "😪" : "Sleepy face",
    "😫" : "Tired face",
    "🥱" : "Yawning face",
    "😴" : "Sleeping face",
    "😌" : "Relieved face",
    "😛" : "Face with tongue",
    "😜" : "Winking face with tongue",
    "😝" : "Squinting face with tongue",
    "🤤" : "Drooling face",
    "😒" : "Uamused face",
    "😓" : "Downcast face with sweat",
    "😔" : "Pensive face",
    "😕" : "Confused face",
    "🙃" : "Upside down face",
    "🤑" : "Money mouth face",
    "😲" : "Astonished face",
    "☹️" : "Frowning face",
    "🙁" : "Slightly frowning face",
    "😖" : "Confounded face",
    "😞" : "Disappointed face",
    "😟" : "Worried face",
    "😤" : "Face with steam from nose",
    "😢" : "Crying face",
    "😭" : "Loudly crying face",
    "😦" : "Frowning face with mouth open",
    "😧" : "Anguished face",
    "😨" : "Fearfull face",
    "😩" : "Weary face",
    "🤯" : "Exploding head",
    "😬" : "Grimacing face",
    "😮‍💨" : "Face exahling",
    "😰" : "Anxious face with sweat",
    "😱" : "Face screaming in fear",
    "🥵" : "Hot face",
    "🥶" : "Cold face",
    "😳" : "Flushed face",
    "🤪" : "Zany face",
    "😵" : "Knocked out face",
    "😵‍💫" : "Dizzy face",
    "🥴" : "Woozy face",
    "😠" : "Angry face",
    "😡" : "Pouting face",
    "🤬" : "Face with symbols on mouth",
    "😷" : "Face with medical mask",
    "🤒" : "Face with thermometer",
    "🤕" : "Face with head bandage",
    "🤢" : "Nauseated face",
    "🤮" : "Face vomiting",
    "🤧" : "Sneezing face",
    "😇" : "Smiling face with halo",
    "🥳" : "Party face",
    "🥸" : "Disguised face",
    "🥺" : "Pleading face",
    "🤠" : "Cowboy hat face",
    "🤥" : "Lying face",
    "🤫" : "Shushing face",
    "🤭" : "Face with handover mouth",
    "🧐" : "Face with monocle",
    "🤓" : "Nerd face",
    "👻" : "Ghost",
};
var ekeys = Object.keys(emojis);
function Interpreter(){
  const[inputMeaning,emojiMeaning]=useState("");
  function eInput(e){
    var Input = e.target.value;
		var meaning = emojis[Input];
		if (meaning === undefined) {
			meaning = "Not Found";
		}
		emojiMeaning(meaning);

  }
  function emojiClickHandler(emoji) {
		var meaning = emojis[emoji];
		emojiMeaning(meaning);
	}


  return(
    <div className="container">
      <b><p>Enter the emoji : </p></b>
      <input onChange={eInput}/>
      <p>{inputMeaning}</p>
      <b><p>What we know</p></b>
      {ekeys.map(function (keys) {
				return (
					<span onClick={() => emojiClickHandler(keys)}>{keys}</span>
				);
			})}
    </div>
  );
}
export default Interpreter;