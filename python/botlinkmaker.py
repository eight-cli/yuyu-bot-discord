ID = int(input('ID u bot: '))
PER = int(input('Permissions Number: '))
print('....')
print(f'''https://discord.com/api/oauth2/authorize?client_id={ID}&permissions={PER}&scope=bot''')