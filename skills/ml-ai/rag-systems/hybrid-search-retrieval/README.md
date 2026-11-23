# Hybrid Search Retrieval

## Description
Implements a hybrid retrieval pipeline combining dense vector similarity with sparse BM25 keyword matching and Reciprocal Rank Fusion (RRF).

## Purpose
Provides actionable instructions for constructing and querying hybrid search indices to balance deep semantic relevance with exact keyword matching precision in RAG applications.

## When to Use
- Building production RAG systems where user queries contain technical identifiers, error codes, or product SKUs alongside conceptual questions.
- Mitigating vector search blind spots where semantic models hallucinate matches on rare domain tokens.
- Combining lexical search results with dense embeddings for improved recall.

## When NOT to Use
- Simple conversational agents with small context windows where standard dense vector search is sufficient.
- Low-latency edge applications where running two retrieval models in parallel exceeds compute budgets.

## Supported Technologies
- Vector Databases: Pinecone, Qdrant, Milvus, Weaviate, pgvector
- Sparse Engines: BM25, Elasticsearch, Lucene
- Frameworks: LangChain, LlamaIndex, Sentence-Transformers

## Dependencies
- Target vector store client and embedding generation model
- BM25 tokenizer and ranker library
- Python 3.10+ or Node.js 18+

## Example Use Cases
### Use Case 1: Technical Documentation Search
A user queries `"TypeError: fetch failed in undici at node 18"`. Dense search identifies Node networking concepts, while BM25 ensures the exact error string `"fetch failed"` is anchored in top results.

### Use Case 2: E-commerce Product Lookup
Queries combining product models (`"Sony WH-1000XM5"`) with descriptive features (`"noise cancelling comfortable for flights"`).

## Usage Instructions
1. Ingest documents and generate both dense embedding vectors and BM25 sparse token counts.
2. On receiving a query, execute vector similarity and BM25 queries concurrently with top-k = 50.
3. Compute Reciprocal Rank Fusion scores across both ranked lists ($k = 60$).
4. Return the fused top-10 chunks with citation metadata.

## Limitations
- Higher index storage footprint due to maintaining dual indices.
- Requires embedding generation latency plus sparse inverted index lookup time.

## Source and Attribution
- **Original Source:** LangChain & LlamaIndex Hybrid Search Architectures
- **License:** MIT
- **Created:** 2026-11-23
- **Version:** 1.0.0
