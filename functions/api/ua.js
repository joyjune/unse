export async function onRequestGet({ request }) {
    const ua = request.headers.get("user-agent") || "";
    const ip = request.headers.get("cf-connecting-ip") || "";
    const country = request.headers.get("cf-ipcountry") || "";
    const ray = request.headers.get("cf-ray") || "";

    return Response.json({
        userAgent: ua,
        ip,
        country,
        ray,
        timestamp: new Date().toISOString()
    });
}
