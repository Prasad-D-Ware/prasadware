import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const RookieUnderstandingOfAI = () => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.97 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="px-1 md:w-2/3 mx-4 md:mx-auto text-white"
    >
      <div className="w-full border border-white "></div>
      <div className="flex items-center gap-2 mt-6 text-sm">
        <Link to="/blogs" className="hover:underline">BLOGS</Link>
        <span>/</span>
        <span className="opacity-70">A Rookie’s Understanding of AI</span>
      </div>

      <h1 className="font-extrabold text-3xl mt-4">A Rookie’s Understanding of AI</h1>
      <p className="opacity-80 mt-1">From Zero to "I Get it!"</p>

      <div className="mt-6 space-y-6 leading-relaxed prose prose-invert max-w-none">
        <div className="md:w-5/6 border-l-2 pl-5 border-dashed border-white">
          <p>
            This quick guide is for absolute beginners. In a few minutes you’ll see how
            text becomes tokens, tokens become embeddings, and how a model like GPT
            strings it all together to produce answers.
          </p>
        </div>

        <h2 className="font-bold text-xl mt-6">AI in One Minute: The Big Picture</h2>
        <p>
          AI is software that learns patterns from data. It’s built on three pillars:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold">Data</span>: examples it learns from</li>
          <li><span className="font-semibold">Model</span>: the pattern learner</li>
          <li><span className="font-semibold">Task</span>: what you want it to do</li>
        </ul>

        <h2 className="font-bold text-xl mt-6">Language is Hard for Computers</h2>
        <p>
          To a computer, plain text is messy characters and bytes. We use two tricks to
          make it workable:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold">Tokenization</span>: cutting text into manageable bits</li>
          <li><span className="font-semibold">Embeddings</span>: turning those bits into meaningful numbers</li>
        </ul>

        <h2 className="font-bold text-xl mt-6">Tokenization: Breaking Things Down</h2>
        <p>
          Models can’t digest an entire paragraph at once. They split text into
          smaller pieces called <span className="font-semibold">tokens</span>. Different models use
          different tokenizers, and there are token limits per request.
        </p>
        <div>
          <div className="font-semibold">Some common tokenization types:</div>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <span className="font-semibold">Character tokenization</span>: splits into individual characters.
              Example: “hello!” → ["h","e","l","l","o","!"]
            </li>
            <li>
              <span className="font-semibold">Word tokenization</span>: splits on spaces/punctuation.
              Example: “unbelievable!” → ["unbelievable", "!"]
            </li>
            <li>
              <span className="font-semibold">Subword tokenization</span> (BPE/WordPiece/SentencePiece): breaks into
              frequent chunks that can recombine. Conceptually: ["un","believ","able","!"]
            </li>
            <li>
              <span className="font-semibold">Byte/byte-pair tokenization</span> (GPT-style): works at the byte
              level, handles any script, emoji, or code.
            </li>
          </ul>
          <div className="mt-3">
            <div className="opacity-80">Try it</div>
            <ul className="list-disc pl-6">
              <li>
                <a className="hover:underline" target="_blank" href="https://tokenizer-zeta.vercel.app/">tokenizer-zeta.vercel.app</a>
              </li>
              <li>
                <a className="hover:underline" target="_blank" href="https://tiktokenizer.vercel.app/">tiktokenizer.vercel.app</a>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="font-bold text-xl mt-6">Vector Embeddings: A Map of Meanings</h2>
        <p>
          After tokenization, we still need a numeric representation. Each token or
          piece of text becomes a vector of numbers. Similar meanings live close
          together in this space; different meanings live far apart.
        </p>
        <div>
          <div className="opacity-80">Why this helps</div>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Semantic search and RAG: find relevant passages by meaning, not keywords.</li>
            <li>Clustering and deduplication of similar sentences/documents.</li>
            <li>Recommendations based on similarity.</li>
          </ul>
          <div className="mt-3">
            <div className="opacity-80">Try it</div>
            <ul className="list-disc pl-6">
              <li>
                <a className="hover:underline" target="_blank" href="https://projector.tensorflow.org/">projector.tensorflow.org</a>
              </li>
              <li>
                <a className="hover:underline" target="_blank" href="https://platform.openai.com/docs/guides/embeddings/embedding-models">OpenAI embedding models</a>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="font-bold text-xl mt-6">GPT: Generative Pre‑trained Transformer</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold">Generative</span>: can produce new text</li>
          <li><span className="font-semibold">Pre‑trained</span>: learned from large amounts of data first</li>
          <li><span className="font-semibold">Transformer</span>: the attention‑powered neural network architecture</li>
        </ul>
        <div className="border-l-2 pl-5 border-dashed border-white">
          <p>
            Think of GPT as a very smart parrot that has read a ton of text and is
            great at predicting the next token. It can sound smart, but it can also be
            confidently wrong—so always double‑check important answers.
          </p>
        </div>

        <h2 className="font-bold text-xl mt-6">How It Works Together: From Text to Answers</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>You type a sentence.</li>
          <li>A tokenizer slices it.</li>
          <li>Slices become vectors (embeddings).</li>
          <li>The model predicts the next tokens.</li>
          <li>Tokens are detokenized back into text.</li>
        </ol>

        <h2 className="font-bold text-xl mt-6">Retrieval‑Augmented Generation (RAG)</h2>
        <p>
          Models have a knowledge cutoff. RAG lets a model consult an external
          “notebook” (your docs, database, or the web) and use the relevant snippets
          while answering the question. Embeddings help find the right page.
        </p>
        <div>
          <div className="opacity-80">Where RAG shines</div>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Chatting over personal notes, PDFs, or research papers</li>
            <li>Customer support that always has the latest info</li>
            <li>Analyst tools that pull from live data</li>
          </ul>
        </div>

        <h2 className="font-bold text-xl mt-6">Tokens, Costs, and Practical Tips</h2>
        <p>
          More tokens usually means more cost and a higher chance of hitting context
          limits. Aim for clarity over length.
        </p>
        <div className="border-l-2 pl-5 border-dashed border-white">
          <div className="font-semibold">Pro‑tip</div>
          <p>
            Structure prompts as <span className="font-semibold">Role + Task + Context + Examples + Constraints</span>.
          </p>
        </div>

        <h2 className="font-bold text-xl mt-6">Myths, Busted</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>“AI understands like humans.” → It’s powerful pattern matching.</li>
          <li>“More tokens = better answers.” → Clarity matters more.</li>
          <li>“Embeddings are only for search.” → They power grouping, recs, and memory.</li>
          <li>“GPT knows everything.” → It needs fresh info for recent events.</li>
        </ul>

        <h2 className="font-bold text-xl mt-6">Conclusion</h2>
        <div className="border-l-2 pl-5 border-dashed border-white">
          <p className="mb-2">Your mental map:</p>
          <p className="italic">Text → Tokens → Embeddings → GPT → Answer</p>
        </div>
        <p>
          Not magic. Just math, maps, and some really clever parrots.
        </p>

        <div className="mt-8">
          <a
            className="hover:underline flex items-center gap-2"
            target="_blank"
            href="https://peerlist.io/prasadware/articles/rookie-understanding-of-ai"
          >
            Read the original article on Peerlist    <FaExternalLinkAlt className="text-white" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default RookieUnderstandingOfAI;
