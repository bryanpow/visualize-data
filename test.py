
def decode(message_file):

    try:
        file = open(message_file, 'r')
        lines = file.readlines()
        file.close()

        #Sorting based on number
        lines.sort(key=lambda x: int(x.split(' ')[0]) )

        decoded_string = ''
        i, distance_to_next_word = 0, 1
        while i < len(lines):
            word = lines[i].split(' ')[-1]
            decoded_string += word
            distance_to_next_word += 1
            i += distance_to_next_word

        return decoded_string.replace('\n', ' ')
    except Exception as e:
        print(f"Error: {e}")
        return None


print(decode('coding_qual_input.txt'))