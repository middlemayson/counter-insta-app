import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Clipboard, Keyboard } from 'react-native';
import PickerSelect from 'react-native-picker-select';
import styles from '../styles/styles';

export default function InstaCopyTextScreen() {
  const [text, setText] = useState('');
  const [maxCharacters, setMaxCharacters] = useState(2200);
  const [textFieldHeight, setTextFieldHeight] = useState(250); // начальная высота

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setTextFieldHeight(180); // высота при открытии клавиатуры
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setTextFieldHeight(250); // возвращаем к начальной высоте
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleMaxCharactersChange = (value) => {
    setMaxCharacters(value);
  };

  const countCharacters = () => {
    const characterCount = text.length;
    return characterCount;
  };

  const remainingCount = maxCharacters - countCharacters();

  const handleCopyText = () => {
    Clipboard.setString(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>С помощью счетчика символов для постов, вы сможете рассчитать нужное количество символов для размещения в социальных сетях</Text>
      <View style={styles.sectionText}>
        <TextInput
          style={[styles.textField, { height: textFieldHeight }]}
          multiline
          value={text}
          onChangeText={setText}
          placeholder="Введите текст..."
        />
        <Text style={styles.textLine}>Количество символов: <Text style={styles.bold}>{countCharacters()}</Text></Text>
        <Text style={[styles.textLine, remainingCount < 0 ? styles.redArea : styles.greenArea]}>
          Осталось символов: <Text style={styles.bold}>{remainingCount}</Text>
        </Text>
      </View>
      <View style={styles.picker}>
        <Text style={styles.pickerText}>Выберите соцсеть:</Text>
        <PickerSelect
            
            placeholder={{ label: 'Выберите нужный формат', value: null }}
            value={maxCharacters}
            onValueChange={(value) => handleMaxCharactersChange(value)}
            items={[
                { label: 'Instagram Пост', value: 2200 },
                { label: 'Instagram Комментарий', value: 2192 },
                { label: 'Instagram Описание аккаунта', value: 150 },
                { label: 'Telegram Пост', value: 4096 },
                { label: 'Telegram Пост с медиафайлами', value: 1024 },
                { label: 'Telegram Описание аккаунта', value: 70 },
                { label: 'Твиттер', value: 260 },
            ]}
            
        />
      </View>
        <Pressable style={styles.copyButton} onPress={handleCopyText}>
            <Text style={styles.btnText}>Копировать текст</Text>
        </Pressable>
    </View>
  );
}
