import React, { useState } from "react";
import { Liauto, Ulauto } from "./autoStyle";

function AutoComplete({ data }) {
  const [suggestions, setSuggestions] = useState([]); // igual que el filtered
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [suggestionsActive, setSuggestionsActive] = useState(false); // showSuggestions
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const query = e.target.value;
    setValue(query);
    if (query.length > 1) {
      const filterSuggestions = data.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(query.toLowerCase()) > -1
      );
      setValue(e.target.value);
      setSuggestions(filterSuggestions);
      setSuggestionIndex(0);
      setSuggestionsActive(true);
    } else {
      setSuggestionsActive(false);
    }
  };

  const handleClick = (e) => {
    setSuggestions([]);
    setValue(e.target.innerText);
    setSuggestionIndex(0);
    setSuggestionsActive(false);
  };

  const handleKeyDown = (e) => {
    // Se presiona la flecha arriba
    if (e.KeyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }
      setSuggestionIndex(suggestionIndex - 1);
    }
    //  Se presiona la flecha abajo
    else if (e.KeyCode === 40) {
      if (suggestionIndex - 1 === suggestions.length) {
        return;
      }
      setSuggestionIndex(suggestionIndex + 1);
    }
    // Se presiona la tecla enter
    else if (e.KeyCode === 13) {
      setValue(suggestions[suggestionIndex]);
      setSuggestionIndex(0);
      setSuggestionsActive(false);
    }
  };

  const Suggestions = () => {
    return suggestions.length ? (
      <Ulauto>
        {suggestions.map((suggestion, index) => {
          const result = index === suggestionIndex ? true : false;
          return (
            <Liauto result={result} key={suggestion} onClick={handleClick}>
              {suggestion}
            </Liauto>
          );
        })}
      </Ulauto>
    ) : (
      <div class="no-suggestions">
        <span role="img" aria-label="tear emoji">
          😪
        </span>{" "}
        <em>Lo Siento no hay sugerencias! </em>
      </div>
    );
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {suggestionsActive && input && <Suggestions />}
    </div>
  );
}

export default AutoComplete;
