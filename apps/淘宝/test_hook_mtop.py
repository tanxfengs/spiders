import frida,sys

hook_code = '''
Java.perform(
    function(){
        var SwitchConfig = Java.use('mtopsdk.mtop.global.SwitchConfig')
        SwitchConfig.isGlobalSpdySwitchOpen.implementation = function(){
            //send('SwitchConfig')
            return false
        }
    }
)
'''

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

process = frida.get_usb_device().attach('com.taobao.taobao')
script = process.create_script(hook_code)
script.on('message', on_message)
script.load()
sys.stdin.read()