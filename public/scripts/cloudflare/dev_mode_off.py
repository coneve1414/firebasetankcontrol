import requests

headers = {
    'Content-Type': 'application/json',
    'X-Auth-Key': 'ba5e905c5ca1797ba1aa1cebf619c5cf450cd',
    'X-Auth-Email': 'justincserver2@gmail.com',
}

data = '{"value":"off"}'

response = requests.patch('https://api.cloudflare.com/client/v4/zones/fc83a78d9caa684087a35a747aa14dc6/settings/development_mode', headers=headers, data=data)
