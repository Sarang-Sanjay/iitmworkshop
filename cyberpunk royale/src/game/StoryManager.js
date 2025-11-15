// Original Story Content
const storyFragments = [
    { id: 1, unlocked: false, text: "The first step is always the hardest. The alley air is thick with neon haze and the stench of ozone. They're hunting me, but they don't know I'm hunting them right back." },
    { id: 2, unlocked: false, text: "I can feel the Grid humming beneath my feet. It's a living thing, a network of light and data. And I'm a virus in its veins." },
    { id: 3, unlocked: false, text: "A memory surfaces: a sterile room, a voice without a face, promises of a better life. All lies. This life, the one on the edge, is the only real one." },
    { id: 4, unlocked: false, text: "The data shard in my pocket feels warm. It's a key, a weapon, a map. It whispers secrets of the city's heart." },
    { id: 5, unlocked: false, text: "I see their drones overhead, black shapes against the purple sky. Let them watch. I'm a ghost in the machine." },
    { id: 6, unlocked: false, text: "They call this place the Neon Canyon. A river of light and broken dreams. I'm just trying to stay afloat." },
    { id: 7, unlocked: false, text: "Another dead end. The city plays games with you. But I'm learning the rules." },
    { id: 8, unlocked: false, text: "I picked up a stray signal. A whisper of a resistance, a safe haven. Could it be real?" },
    { id: 9, unlocked: false, text: "The rain here is different. It tastes of metal and regret. Washes the streets, but not the sins." },
    { id: 10, unlocked: false, text: "I bypassed a security node. For a second, I saw everything. The whole damn city, a web of control. And I was a spider on it." },
    { id: 11, unlocked: false, text: "My chrome leg is acting up. A reminder of what they took from me. And what I'll take back." },
    { id: 12, unlocked: false, text: "A holographic ad flickers, a perfect family, a perfect life. It's the prettiest lie in this city of lies." },
    { id: 13, unlocked: false, text: "I found a data-cache. Encrypted, of course. But I'm a better lockpick than they are builders." },
    { id: 14, unlocked: false, text: "The shard is reacting to something. A pull, a resonance. I'm getting closer." },
    { id: 15, unlocked: false, text: "They're deploying Enforcers. Upgraded chrome, no hesitation. This is getting serious." },
    { id: 16, unlocked: false, text: "I jumped a chasm between two skyscrapers. For a moment, I was flying. The city looked so small from up there." },
    { id: 17, unlocked: false, text: "The resistance signal again. Stronger this time. It's a breadcrumb, and I'm starving." },
    { id: 18, unlocked: false, text: "My bio-scanner is picking up traces of another runner. Friend or foe?" },
    { id: 19, unlocked: false, text: "I had to ditch my jacket. It had a tracker woven into the fabric. They're getting smarter." },
    { id: 20, unlocked: false, text: "The shard showed me a vision. A tower of glass and light, the heart of the corporation. My target." },
    { id: 21, unlocked: false, text: "I ran into a black market dealer. He offered me a new identity for a price. I told him I'm not running from who I am." },
    { id: 22, unlocked: false, text: "The Enforcers almost had me. A close call. Too close. My heart is hammering against my ribs like a caged bird." },
    { id: 23, unlocked: false, text: "I'm in the lower levels now. The neon is dimmer here, the shadows longer. More dangerous." },
    { id: 24, unlocked: false, text: "The shard is a piece of their own tech, a master key. They never thought someone would be crazy enough to steal it." },
    { id: 25, unlocked: false, text: "Another runner. We didn't speak, just a nod. A silent acknowledgment of our shared struggle." },
    { id: 26, unlocked: false, text: "I'm starting to see the cracks in the system. The glitches in the perfect facade. That's where I'll break in." },
    { id: 27, unlocked: false, text: "The resistance is real. I found one of their symbols painted on a wall. A stylized bird, taking flight." },
    { id: 28, unlocked: false, text: "They're broadcasting my face on every screen. 'Corporate terrorist'. I'd wear it as a badge of honor if it wasn't so damn inconvenient." },
    { id: 29, unlocked: false, text: "I'm so tired. But I can't stop. Not until I've burned their system to the ground." },
    { id: 30, unlocked: false, text: "The shard is more than a key. It's a seed. Plant it in the right place, and a whole new system can grow." },
    { id: 31, unlocked: false, text: "I saw a child in the lower levels, playing with a discarded piece of chrome. They deserve a better world than this." },
    { id: 32, unlocked: false, text: "The resistance has a name: 'The Glitch'. It's perfect." },
    { id: 33, unlocked: false, text: "I'm following the resistance's signal. It's leading me to the old, abandoned subway tunnels." },
    { id: 34, unlocked: false, text: "It's a maze down here. Dark, damp, and full of ghosts." },
    { id: 35, unlocked: false, text: "I found them. 'The Glitch'. A handful of rebels, hackers, and dreamers. I'm not alone anymore." },
    { id: 36, unlocked: false, text: "They have a plan. A crazy, impossible plan. It might just work." },
    { id: 37, unlocked: false, text: "The plan requires me to get to the top of the corporate tower. The most secure building in the city. No pressure." },
    { id: 38, unlocked: false, text: "They're giving me new tech. A cloaking device, short-range teleport. Things are about to get interesting." },
    { id: 39, unlocked: false, text: "I'm back on the surface. The city looks different now. Not just a prison, but a puzzle. And I have the answer key." },
    { id: 40, unlocked: false, text: "The cloaking device works. I can walk right past the Enforcers. The feeling is intoxicating." },
    { id: 41, unlocked: false, text: "The teleport is risky. It tears a hole in the fabric of the Grid. Use it too much, and I'll attract the wrong kind of attention." },
    { id: 42, unlocked: false, text: "I'm climbing the tower. Not from the outside, but from the inside, through its data streams and service corridors." },
    { id: 43, unlocked: false, text: "The higher I go, the more sterile it gets. The soul of the city is in the grime of the lower levels." },
    { id: 44, unlocked: false, text: "I can hear the CEO's voice on the comms. He's rattled. He knows I'm coming." },
    { id: 45, unlocked: false, text: "I'm in the executive levels. The air is filtered, the light is soft. It's the calm before the storm." },
    { id: 46, unlocked: false, text: "The shard is singing now. It knows it's close to home." },
    { id: 47, unlocked: false, text: "I found their mainframe. A fortress of code and ice. Time to do what I do best." },
    { id: 48, unlocked: false, text: "The ice is thick. But I'm a fire." },
    { id: 49, unlocked: false, text: "I'm in. The system is open to me. I can see everything. Every secret, every lie." },
    { id: 50, unlocked: false, text: "The truth is worse than I imagined. They're not just controlling the city. They're controlling the people. Their thoughts, their memories." },
    { id: 51, unlocked: false, text: "I was one of their experiments. A failed attempt to create a perfect corporate soldier." },
    { id: 52, unlocked: false, text: "My memories, my identity... they're not all mine. They're constructs, implanted to keep me compliant." },
    { id: 53, unlocked: false, text: "But something went wrong. I broke free. I remembered what it was to be human." },
    { id: 54, unlocked: false, text: "The shard isn't just a key. It's a cure. It can undo what they've done." },
    { id: 55, unlocked: false, text: "I'm broadcasting the truth. To every screen, every citizen. The city is waking up." },
    { id: 56, unlocked: false, text: "They're trying to shut me down. The system is fighting back. But I'm not just a runner anymore. I'm a symbol." },
    { id: 57, unlocked: false, text: "The tower is shaking. The city is in chaos. It's the beautiful, terrible birth of a revolution." },
    { id: 58, unlocked: false, text: "The CEO is begging me to stop. He's offering me everything. A life of luxury, a new identity. He still doesn't get it." },
    { id: 59, unlocked: false, text: "I don't want their lies. I want a real life. For me, and for everyone else." },
    { id: 60, unlocked: false, text: "The shard is integrated. The cure is spreading through the network. People are remembering who they are." },
    { id: 61, unlocked: false, text: "The Enforcers are standing down. Some are even joining the rebellion. They were puppets, and their strings have been cut." },
    { id: 62, unlocked: false, text: "The city is breathing again. The neon lights seem brighter, the rain feels cleaner." },
    { id: 63, unlocked: false, text: "My job isn't over. This was just the first step. There are other cities, other corporations." },
    { id: 64, unlocked: false, text: "The Glitch is no longer a small resistance. It's a movement." },
    { id: 65, unlocked: false, text: "I'm standing on the rooftop of the tower, looking out at the city I helped free. It's a beautiful sight." },
    { id: 66, unlocked: false, text: "I have a new purpose. Not just to run, but to lead." },
    { id: 67, unlocked: false, text: "The shard is a part of me now. I can feel the Grid, not as a prison, but as a tool." },
    { id: 68, unlocked: false, text: "They'll hunt me, of course. The other corporations. They'll send their best. I'm counting on it." },
    { id: 69, unlocked: false, text: "Let them come. I'll be ready." },
    { id: 70, unlocked: false, text: "I am the glitch in their perfect system. The ghost in their machine. I am the future." },
    { id: 71, unlocked: false, text: "The city is healing. But the scars will remain. A reminder of what was lost, and what was won." },
    { id: 72, unlocked: false, text: "I've become a legend. A story parents tell their children. The runner who broke the system." },
    { id: 73, unlocked: false, text: "But I'm not a myth. I'm real. And I'm still fighting." },
    { id: 74, unlocked: false, text: "The Grid is a dangerous place. But it's also a place of infinite possibility." },
    { id: 75, unlocked: false, text: "I've learned to surf the data streams, to bend the code to my will." },
    { id: 76, unlocked: false, text: "The other cities are calling to me. Their oppressed people, their suffocating systems. They need a glitch." },
    { id: 77, unlocked: false, text: "My next run begins now. A new city, a new corporation. The same fight." },
    { id: 78, unlocked: false, text: "I am a whisper on the wire, a shadow in the code. I am the resistance." },
    { id: 79, unlocked: false, text: "They can build their walls. I'll find a way to break them." },
    { id: 80, unlocked: false, text: "They can write their code. I'll find a way to rewrite it." },
    { id: 81, unlocked: false, text: "They can create their perfect world. I'll be the chaos that makes it real." },
    { id: 82, unlocked: false, text: "The run is everything. It's life, it's freedom, it's hope." },
    { id: 83, unlocked: false, text: "I am a runner. And I will run until every chain is broken." },
    { id: 84, unlocked: false, text: "The signal is my guide. The rhythm of the city is my soundtrack." },
    { id: 85, unlocked: false, text: "I move through the neon jungle, a predator of a different kind." },
    { id: 86, unlocked: false, text: "The city is my playground. And I'm making up my own rules." },
    { id: 87, unlocked: false, text: "The future is unwritten. And I'm holding the pen." },
    { id: 88, unlocked: false, text: "I am the hope of the hopeless, the voice of the voiceless." },
    { id: 89, unlocked: false, text: "I am the glitch that will save them all." },
    { id: 90, unlocked: false, text: "The run continues. It always continues." },
    { id: 91, unlocked: false, text: "I am forever, a part of the code, a legend in the making" },
    { id: 92, unlocked: false, text: "My journey is far from over. I must continue to run, to fight for what is right, to inspire others to do the same" },
    { id: 93, unlocked: false, text: "The city is alive with the sound of rebellion, a symphony of hope that echoes through the neon-lit streets" },
    { id: 94, unlocked: false, text: "I am the spark that ignited the flame, the catalyst for change in a world that had forgotten what it means to be free" },
    { id: 95, unlocked: false, text: "The run is not just about survival anymore. It's about building a new world from the ashes of the old" },
    { id: 96, unlocked: false, text: "The core is in sight. A pulsating sphere of pure data. It's beautiful. It's terrifying." },
    { id: 97, unlocked: false, text: "I can hear the Architect's voice in my head, a chorus of a million subjugated minds. But my own voice is louder." },
    { id: 98, unlocked: false, text: "This is it. The point of no return. The shard is resonating, ready to rewrite the system." },
    { id: 99, unlocked: false, text: "I am not just a runner anymore. I am an idea. A rebellion coded in flesh and chrome." },
    { id: 100, unlocked: false, text: "I leap. The city holds its breath. The Grid screams. And for the first time, I feel truly free. The signal is sent. The revolution has begun." }
].map(fragment => ({
    ...fragment,
    image: `/assets/story_images/story_${fragment.id}.png`,
    audio: `/assets/story_audio/story_${fragment.id}.mp3`
}));

const unlockMilestones = [2000];
for (let i = 1; i < 100; i++) {
    unlockMilestones.push(unlockMilestones[i - 1] + 2000 + i * 200);
}

const STORY_STORAGE_KEY = 'cyberpunkRunnerStory';

export class StoryManager {
    constructor() {
        this.fragments = this.loadStoryProgress() || storyFragments;
    }

    loadStoryProgress() {
        const saved = localStorage.getItem(STORY_STORAGE_KEY);
        return saved ? JSON.parse(saved) : null;
    }

    saveStoryProgress() {
        localStorage.setItem(STORY_STORAGE_KEY, JSON.stringify(this.fragments));
    }

    checkUnlock(distance) {
        let newUnlock = false;
        for (let i = 0; i < this.fragments.length; i++) {
            if (!this.fragments[i].unlocked && distance >= unlockMilestones[i]) {
                this.fragments[i].unlocked = true;
                newUnlock = true;
            }
        }
        if (newUnlock) {
            this.saveStoryProgress();
        }
        return newUnlock;
    }

    getUnlockedFragments() {
        return this.fragments.filter(f => f.unlocked);
    }

    getFragment(id) {
        return this.fragments.find(f => f.id === id);
    }

    reset() {
        localStorage.removeItem(STORY_STORAGE_KEY);
        this.fragments.forEach(f => f.unlocked = false);
    }
}
