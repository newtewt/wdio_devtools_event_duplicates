A sample project to reproduce the duplicate entries seen by listening to the devtools event emitters


To use

run `npm install`
run `npm run wdio`

Review the log.txt file that is generated. I have an example below that shows entries with timestamps at the same time.


```
1628881155140.929 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
1628881155140.929 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
1628881224598.207 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
1628881224598.207 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
1628881250938.352 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
1628881250938.352 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
1628881273150.818 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
1628881273150.818 [warning]: javascript The resource https://github.com/webgl-globe/data/data.json was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally. url: https://github.com/
```