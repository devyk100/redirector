# Kaicode
- Collaborative code editor using monaco, ws and yjs.
- Uses a custom judge I deployed on EC2, it scales up and down the docker containers(sandboxed code execution) programmatically using docker client in golang, based on the queue 
- I baked in a deepseek api for ghosted autocompletion - though it is quite slow, but works
- actually completed, but EC2 had cost anomalies so I have to redeploy

# Yuclase
- Topic wise distributed fault tolerant simple queue service(replication), with possibly my own golang storage engine - or if time is less I'll use some KV store 
- Using golang
- I plan to showcase its efficiency and possibly push a docker hub image link to show

# Pristine
- In C++ using Boost Asio, async-i/o making a reverse proxy and load balancer
- I plan to showcase its efficiency and possibly push a docker hub image link to show

# AI based meet app
- A meet app where live translation/transcribing takes place in realtime
- Will use nextjs, and slapping webrtc with my own EC2 instance deployed livekit webrtc
- Live meeting summary, that keeps changing, or keeps context whenever someone new joins in
- Deploying the same way as kaicode

# Godot Game
- A simple 2.5/2D multiplayer, like mo.co, or brawl stars, dota, very simple for android and PC
- deploy my server again on that EC2 or lightsail instance
- I'll try my best to push to playstore

# Touring app
- An app where you get tips when you scan or record audio, and translate it to your native language - offline first, using some native AI models on android
- You can also click photos, and it will create a presentation of your trips on the google maps API or so 
- I'll try my best to push to playstore# redirector
