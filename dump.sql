--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: avatars; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.avatars (
    id integer NOT NULL,
    name text NOT NULL,
    age integer NOT NULL,
    "superPower" text NOT NULL,
    "idCategory" integer DEFAULT 0 NOT NULL
);


--
-- Name: avatars_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.avatars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: avatars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.avatars_id_seq OWNED BY public.avatars.id;


--
-- Name: categorys; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categorys (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: categorys_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categorys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categorys_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categorys_id_seq OWNED BY public.categorys.id;


--
-- Name: avatars id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.avatars ALTER COLUMN id SET DEFAULT nextval('public.avatars_id_seq'::regclass);


--
-- Name: categorys id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categorys ALTER COLUMN id SET DEFAULT nextval('public.categorys_id_seq'::regclass);


--
-- Data for Name: avatars; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.avatars VALUES (2, 'Coringa', 25, 'Risadas', 3);
INSERT INTO public.avatars VALUES (3, 'Superman', 30, 'Super-Força', 2);
INSERT INTO public.avatars VALUES (4, 'Pinguim', 44, 'Sei lá kkk, nariz ?', 3);
INSERT INTO public.avatars VALUES (5, 'Lex Lutor', 34, 'Dinheiro', 3);


--
-- Data for Name: categorys; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categorys VALUES (1, 'Cívil');
INSERT INTO public.categorys VALUES (2, 'Herói');
INSERT INTO public.categorys VALUES (3, 'Vilão');


--
-- Name: avatars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.avatars_id_seq', 5, true);


--
-- Name: categorys_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categorys_id_seq', 3, true);


--
-- Name: avatars avatars_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.avatars
    ADD CONSTRAINT avatars_pk PRIMARY KEY (id);


--
-- Name: categorys categorys_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categorys
    ADD CONSTRAINT categorys_pk PRIMARY KEY (id);


--
-- Name: avatars avatars_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.avatars
    ADD CONSTRAINT avatars_fk0 FOREIGN KEY ("idCategory") REFERENCES public.categorys(id);


--
-- PostgreSQL database dump complete
--

