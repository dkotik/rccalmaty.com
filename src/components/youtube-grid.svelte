<script>
    export let videoFeed = null;
    //     <a
    //     href={"https://www.youtube.com/watch?v=" + video["yt:videoId"]}
    //     target="_blank"
    // >
</script>

{#if videoFeed}
    <section>
        {#each videoFeed.feed?.entry || [] as video, index}
            <a href={"/sermon/" + video["yt:videoId"] + ".html"}>
                <figure>
                    <img
                        alt={video.title}
                        src={"https://i2.ytimg.com/vi/" +
                            video["yt:videoId"] +
                            "/hqdefault.jpg"}
                    />
                    <figcaption>
                        {video.title}
                    </figcaption>
                </figure>
            </a>
        {/each}
    </section>
    <a
        class="button is-fullwidth"
        target="_blank"
        href="https://www.youtube.com/channel/{videoFeed.feed['yt:channelId']}"
        >View on Youtube</a
    >
{/if}

<style>
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 1em;
        margin-bottom: 2em;
    }
</style>
